package co.com.sofka.okr.c2.usecase.vertical;

import co.com.sofka.okr.c2.model.vertical.Vertical;
import co.com.sofka.okr.c2.model.vertical.gateways.VerticalRepository;
import co.com.sofka.okr.c2.model.vertical.values.VerticalName;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = ListVerticalUseCase.class)
class ListVerticalUseCaseTest {

    @MockBean
    VerticalRepository verticalRepository;

    @Autowired
    ListVerticalUseCase listVerticalUseCase;

    @Test
    @DisplayName("Test listar vertical por id")
    public void verticalById(){

        Vertical vertical = new Vertical("1",new VerticalName("QA"));

        Mockito.when(verticalRepository.getVerticalById(vertical.getId())).thenReturn(Mono.just(vertical));
        Mono<Vertical> response = listVerticalUseCase.listVertical("1");
        Assertions.assertEquals(response.block().getId(), "1");

    }
}