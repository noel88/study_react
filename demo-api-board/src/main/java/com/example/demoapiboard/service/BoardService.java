package com.example.demoapiboard.service;

import com.example.demoapiboard.model.Board;
import com.example.demoapiboard.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository repository;


    public void add(Board board) {
        repository.save(board);
    }

    public Board getlist(Long id) throws Exception {

        Board list = repository.findById(id).orElseThrow(() -> new Exception("찾을 수 없습니다."));
        return list;
    }

    public List<Board> getlists() {
        return repository.findAll();
    }

    public void delete(Long id) throws Exception {
        Board list = repository.findById(id).orElseThrow(() -> new Exception("찾을 수 없습니다."));
        repository.delete(list);
    }
}
