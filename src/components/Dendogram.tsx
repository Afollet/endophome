import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Group } from "@visx/group";
import { Cluster, hierarchy } from "@visx/hierarchy";
import {
  HierarchyPointNode,
  HierarchyPointLink,
} from "@visx/hierarchy/lib/types";
import { LinkHorizontal } from "@visx/shape";
import { LinearGradient } from "@visx/gradient";
import { Annotation, Connector, CircleSubject, Label } from "@visx/annotation";

export const green = "#79d259";
const aqua = "#37ac8c";
const merlinsbeard = "#BF907E";
export const background = "#fff";

interface NodeShape {
  name: string;
  children?: NodeShape[];
}

const clusterData: NodeShape = require("../resources/dendogram.json");

function Node({ node }: { node: HierarchyPointNode<NodeShape> }) {
  const isRoot = node.depth === 0;
  const isSubfamily = node.depth === 1;
  const isNotParent = !!node.children;
  const name_label = !isNotParent ? node.data.name : "";
  const url_label = name_label.toLowerCase().replace(" ", "_");
  const tab_index = !isNotParent ? 0 : -1;

  if (isRoot) return <RootNode node={node} />;
  if (isSubfamily){
    return (
      <Group x={node.x} y={node.y} >
        {isSubfamily ? (
          <Annotation
            x={node.y}
            y={node.x}
            dx={0} // x offset of label from subject
            dy={-15} // y offset of label from subject
          >
            <CircleSubject
              radius={10}
              strokeWidth={2}
              stroke="#BF907E"
              strokeOpacity={0.5}
              fill="white"
            />
            <Label
              title={node.data.name}
              titleFontSize={16}
              backgroundFill="white"
              showAnchorLine={false}
              anchorLineStroke="#006a71"
              backgroundProps={{ stroke: "#006a71" }}
              fontColor="#006a71"
            />
          </Annotation>
        ) : null}
      </Group>
    );
  }
  if (isNotParent && url_label === ''){
    return (<></>)
  }
  return (
    <Group top={node.x} left={node.y}>
      <Link to={`/species/${url_label}`} tabIndex={tab_index}>
        <text
          dx="0.33em"
          dy=".33em"
          fontSize={16}
          fontFamily="Noto Sans"
          textAnchor="start"
          fill="#006a71"
          fontWeight={0.5}
          className="hover:underline"
          cursor="pointer"
          aria-label={`Click to see the information for species ${name_label}`}
       > 
          {name_label}
        </text>
      </Link>
    </Group>
  );
}

function RootNode({ node }: { node: HierarchyPointNode<NodeShape> }) {
  const width = 40;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;

  return (
    <Group top={node.x} left={node.y}>
      <text
        dx="-.66"
        dy=".33em"
        fontSize={16}
        textAnchor="end"
        style={{ pointerEvents: "none" }}
        fill="#006a71"
      >
        {node.data.name}
      </text>
    </Group>
  );
}

const defaultMargin = { top: 20, left: 100, right: 200, bottom: 0 };

export type DendrogramProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

export default function Dendrogram({
  width,
  height,
  margin = defaultMargin,
}: DendrogramProps) {
  const data = useMemo(() => hierarchy<NodeShape>(clusterData), []);
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  return width < 10 ? null : (
    <figure aria-label="Figure of a phylogenetic tree of Rubiaceae containing three
    subfamilies Rubioidea Cinchonoideae and Ixoroidea. Rubioidea contains the species 
    Notopleura polyphlebia, Ronabea latifolia, and Psychotria panamensis. Cinchonoideae contains
    the species Isertia Haenkeana. Ixoroideae contains Chimarrhis latifolia, Simira maxonii, 
    Macrocnemum roseum, Warszewiczia coccina, Rustia costaricensis, Somdera donell-smithii, Posoqueria latifolia
    and Coffea arabic">
    <svg width={width} height={height}>
      <LinearGradient id="top" from={green} to={aqua} />
      <rect width={width} height={height} rx={14} fill={background} />
      <Cluster<NodeShape> root={data} size={[yMax, xMax]}>
        {(cluster) => (
          <Group top={margin.top} left={margin.left}>
            {cluster.links().map((link, i) => (
              <LinkHorizontal<
                HierarchyPointLink<NodeShape>,
                HierarchyPointNode<NodeShape>
              >
                key={`cluster-link-${i}`}
                data={link}
                stroke={merlinsbeard}
                strokeWidth="10"
                strokeOpacity={0.5}
                fill="none"
              />
            ))}
            {cluster.descendants().map((node, i) => (
              <Node key={`cluster-node-${i}`} node={node} />
            ))}
          </Group>
        )}
      </Cluster>
    </svg>
    </figure>
  );
}
