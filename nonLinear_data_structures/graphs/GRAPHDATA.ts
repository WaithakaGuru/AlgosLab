export const sampleMap1 = {
    A: {
        name: "Mjini",
        code: "A",
        connectedTowns: ["B", "C", "E"],
        cost: 6
    },
    B: {
        name: "Mukuyu",
        code:  "B",
        connectedTowns: ["A", "D", "F"],
        cost: 8
    },
    C: {
        name: "Murang'a Town", 
        code: "C",
        connectedTowns: ["A", "E", "D", "F"],
        cost: 15
    },
   D: {
        name: "Mathioya",
        code: "D",
        connectedTowns: ["B", "C", "F"],
        cost: 21
    },
    E: {
        name: "Sagana",
        code: "E",
        connectedTowns: ["A", "C",],
        cost: 7
    },
    F: {
        name: "Maragua", 
        code: "F",
        connectedTowns: ["B", "C", "D"],
        cost: 9
    }
}