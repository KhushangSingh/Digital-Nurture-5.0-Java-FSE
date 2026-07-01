package com.library.app;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.repository.BookRepository;
import com.library.service.BookService;

public class LibraryManagementApplication {

    public static void main(String[] args) {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        
        BookService bookService = context.getBean("bookService", BookService.class);
        bookService.testService();
        
        BookRepository bookRepository = context.getBean("bookRepository", BookRepository.class);
        bookRepository.testRepository();
        
        context.close();
    }
}
