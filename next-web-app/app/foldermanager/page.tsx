"use client";
import React, { useState } from "react";

const getID = () => {
  return Math.ceil(Math.random() * 1000000);
};

const initialJson = [
  {
    id: getID(),
    name: "folder1",
    type: "folder",
    child: [
      { id: getID(), name: "file1", type: "file" },
      {
        id: getID(),
        name: "folder4",
        type: "folder",
        child: [{ name: "folder5", type: "folder", child: [] }],
      },
    ],
  },
  { id: getID(), name: "folder1", type: "folder", child: [] },
  { id: getID(), name: "folder1", type: "folder", child: [] },
];
const getIcon = (obj) => {
  if (obj.type === "folder") return "FO";
  return "fi";
};

const traverseArray = (array: [], id, name) => {
  array.forEach((item) => {
    if (item.id === id) {
      item.child.push({
        id: getID(),
        name: name,
        type: "folder",
        child: [],
      });
    } else if (item?.child?.length > 0) {
      traverseArray(item.child, id, name); // recurse into children
    }
  });
};

export default function FolderManager() {
  const [fileInfo, setFileInfo] = useState(initialJson);
  const onAdd = ({ id, name, type }) => {
    const array = structuredClone(fileInfo);
    traverseArray(array, id, name);
    setFileInfo(array);
  };

  return (
    <div>
      {fileInfo.map((item, key) => {
        return <FolderComponent setNewNode={onAdd} item={item} key={key} />;
      })}
    </div>
  );
}

const FolderComponent = ({ item, setNewNode }) => {
  return (
    <>
      <div style={{ display: "flex", border: "1px solid black" }}>
        <div className="icon">{getIcon(item)}</div>
        <div>
          . {item.name} {item.id}
        </div>
        {item.type === "folder" && (
          <button
            onClick={() => {
              setNewNode({ id: item.id, type: "folder", name: `test${getID()}` });
            }}
          >
            +
          </button>
        )}
      </div>
      <div style={{ marginLeft: "15px" }}>
        {item.type === "folder" &&
          item?.child?.map((child, key) => {
            return (
              <div key={key}>
                {child.type === "folder" ? (
                  <FolderComponent setNewNode={setNewNode} item={child} />
                ) : (
                  child.name
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};
