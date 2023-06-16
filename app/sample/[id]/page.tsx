import { useRouter } from "next/router";
import React from "react";

function Id({ params }: { params: { id: string } }) {
  return <div>Id : {params.id}</div>;
}

export default Id;
