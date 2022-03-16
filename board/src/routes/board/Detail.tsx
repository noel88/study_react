import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {Container} from "react-bootstrap";
import {fetchDetail} from "../../api";

export type IDetailsParam = {
  id: string;
}

export const Detail = () => {
  const { id } = useParams<IDetailsParam>();
  const { isLoading, data } = useQuery("list", () => fetchDetail(id));

  console.log("Detail",  data)
  return (
    <Container>
      {
        isLoading ? (<h1>Loading</h1>) : (
          <div key={data?.id}>Detail: {data.description}</div>
        )
      }
    </Container>

  )
}
