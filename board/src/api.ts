import {IBoardForm} from "./Model/Board";
import {IDetailsParam} from "./routes/board/Detail";

const BASE_URL = "http://localhost:8080/api"

export function fetchList() {
  return fetch(`${BASE_URL}/lists`)
    .then(response => response.json());
}

export function fetchAdd(data: IBoardForm) {
  return fetch(`${BASE_URL}/add`,{
    method: "POST",
    headers: {
      "content-Type" : "application/json"
    },
    body: JSON.stringify({
      title: data.title,
      description: data.description
    })
  })
    .then((data) => console.log(data));
}

export function fetchDetail(id: string | undefined) {
  return fetch(`${BASE_URL}/list/${id}`)
    .then(response => response.json());
}
