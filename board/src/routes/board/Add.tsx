import React from "react";
import styled from 'styled-components';
import {Button, Col, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {fetchAdd} from "../../api";
import {IBoardForm, IBoardList} from "../../Model/Board";

const Form = styled.form`
  margin-top: 20px;
  align-content: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: large;
`;

const SubTitle = styled.h1`
  font-size: 12px;
  color: chocolate;
`;

const Container = styled.div`
  padding: 0 20px;
  max-width: 600px;
  align-content: center;
  justify-content: center;
  margin: 150px auto;
`;


export const Add = () => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, setValue, formState: {errors} } = useForm<IBoardForm>();
  //TODO:
  // - POST 전송시에는 userQuery를 쓸 필요가 없는가?
  // - body에 보내는 data를 각각 json으로 다시 만들어 보내야 하는가?
  // - 데이터 전송 후 input 값 초기화를 위해 setValue를 각각 수정해주어야 하는가?

  const mutation = useMutation((newList: IBoardList) => fetchAdd(newList), {
    onMutate: (data: IBoardList) => {
      const previousValue = queryClient.getQueryData('lists');
      console.log('previousValue', data);
      queryClient.setQueryData('lists', (old: any) => {
        console.log('old', old);
        return [...old, data];
      });

      return previousValue;
    },
    onSuccess: (result, variables, context) => {
      console.log('성공 메시지:', result);
      console.log('변수', variables);
      console.log('onMutate에서 넘어온 값', context);
      //setUserId(userId + 1);
    }
  })

  const onValid = (data: IBoardForm) => {
    // fetchAdd(data).then(r => console.log(r));
    mutation.mutate(data);
    setValue("title", "")
    setValue("description", "")
  }

  return (
    <Container>
      <Title>Board Example</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Row>
          <Col md="2">
            <SubTitle>제목</SubTitle>
          </Col>
          <Col md="10">
            <input type="text" {...register("title", {
              required: "반드시 제목을 입력해야 합니다.",
            })} className="form-control" placeholder="" />
          </Col>
          <span>{errors?.title?.message}</span>
        </Row>
        <Row>
          <Col md="2">
            <SubTitle>내용</SubTitle>
          </Col>
          <Col md="10">
            <textarea {...register("description", {
              required: "반드시 내용을 입력해야 합니다.",
              minLength: {
                value: 10,
                message: "10글자 이상 입력해주세요."
              }
            })} className="form-control"/>
          </Col>
          <span>{errors?.description?.message}</span>
        </Row>
        <Row>
          <Button type="submit">Add</Button>
        </Row>
      </Form>
    </Container>


  )
}
