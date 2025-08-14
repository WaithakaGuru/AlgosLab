import { sampleMap1 } from "./GRAPHDATA";

type MapType = {
    name: string, code: string, cost: number, connectedTowns: string[]
}
class MapGraphNode{
    Name: string; 
    Cost: number
    code : string
    connectedNodes: Array<String>
    PreviousNode: MapGraphNode | null
    other: {[key: string]: any} | null = {}
    constructor(mapData: MapType){
        this.Name = mapData.name;
        this.Cost = mapData.cost;
        this.code = mapData.code;
        this.connectedNodes = mapData.connectedTowns
        this.PreviousNode = null
    }
}

class Graph{
    graph: Record<string, MapGraphNode> = {}
    
    /**
     * Cnstructs a graph from an array of data about the graph's vertices.
     * @param graphData  An array containing all data of the graph nodes(vertices) as declared in @class MapGraphNode.
     * @returns The newly constructed graph 
     */
    makeGraph(graphData:{[key: string]: MapType}){
        for(const item in graphData){
            this.graph[item] = new MapGraphNode(graphData[item])
        }
    }
    
    /**
     * Gets the connection of each vertex or those of a given vertex if its code is specified.
     * @param code The code (unique identifier for a specific graphNode'vertex'). If specified, only connections of the specific node are returned.
     * @returns The connections of the vertex as a [u,v] combination where 'u' is the origin and 'v' is the code of the destination vertex
     */
    getConnections(code?: string){
        const connections = []
        if(code) {
            for(const connectedTown of this.graph[code].connectedNodes)
                connections.push({code, connectedTown})
        }
        return connections
    }
}
