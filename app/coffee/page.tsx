import React from "react";

async function getTodoData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 10 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

async function Coffee() {
  const data = await getTodoData();

  return (
    <>
      <h1>Coffee</h1>
      <h2>나는 아아만 마신다</h2>
      <p>그리고 스콘을 좋아하지</p>
    </>
  );
}

export default Coffee;
