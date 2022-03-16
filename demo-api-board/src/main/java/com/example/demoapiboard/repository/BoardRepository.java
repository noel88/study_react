package com.example.demoapiboard.repository;

import com.example.demoapiboard.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public
interface BoardRepository extends JpaRepository<Board, Long> {


}
