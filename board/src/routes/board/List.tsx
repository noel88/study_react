import React from "react";
import {Button, Container, Table} from "react-bootstrap";
import {useQuery} from "react-query";
import { Link } from "react-router-dom";
import {fetchList} from "../../api";


interface IList {
  id: number;
  title:string;
}


export const List = () => {
  const {isLoading, data} = useQuery<IList[]>("lists",
    () => fetchList());
  return (
    <Container>
      { isLoading ? <h1>Loading</h1> : null }
      <Button>
        <Link to={"/add"} >
          ADD
        </Link>
      </Button>
      <Table>
        <thead>
        <tr>
          <td>No</td>
          <td>제목</td>
        </tr>
        </thead>
        <tbody>
          {
            data?.map((list) => {
              return (<tr key={list.id}>
                <td>
                  {list.id}
                </td>
                <td>
                  <Link to={`/detail/${list.id}`} state={{state: list.title}}>
                  {list.title}
                  </Link>
                </td>
              </tr>)
            })
          }
        </tbody>
      </Table>
    </Container>
  )
}
