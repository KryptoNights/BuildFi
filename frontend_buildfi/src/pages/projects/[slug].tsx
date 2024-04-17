import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { CircularProgress } from "@mui/material";

const Slug = (props: any) => {
  const router = useRouter();
  const { slug }: any = router.query;

  const [post, setPost]: any = React.useState([]);
  const [replies, setReplies] = useState([]);
  const [address, setAddress] = React.useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      {console.log("inside")}
      <div>hey</div>
    </>
  );
};

export default Slug;
