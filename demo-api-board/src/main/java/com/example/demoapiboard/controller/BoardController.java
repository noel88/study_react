package com.example.demoapiboard.controller;


import com.example.demoapiboard.model.Board;
import com.example.demoapiboard.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class BoardController {

    private final BoardService service;


    @GetMapping("/lists")
    public ResponseEntity getLists() {
        return new ResponseEntity<>(service.getlists(), HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity getList(@PathVariable("id") Long id) throws Exception {

        return new ResponseEntity<>(service.getlist(id), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity addList(@RequestBody Board board) {
        service.add(board);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity updateList(@PathVariable("id") Long id, @RequestBody Board board) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/del/{id}")
    public ResponseEntity deleteList(@PathVariable("id") Long id) throws Exception {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
