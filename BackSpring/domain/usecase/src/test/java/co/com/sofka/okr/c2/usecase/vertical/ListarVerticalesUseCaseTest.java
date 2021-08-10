package co.com.sofka.okr.c2.usecase.vertical;

import co.com.sofka.okr.c2.model.vertical.Vertical;
import co.com.sofka.okr.c2.model.vertical.gateways.VerticalRepository;
import co.com.sofka.okr.c2.model.vertical.values.VerticalName;
import lombok.var;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Flux;

@SpringBootTest(classes = VerticalUseCase.class)
 class ListarVerticalesUseCaseTest {

    @MockBean
    private VerticalRepository verticalRepository;
    @SpyBean
    VerticalUseCase verticalUseCase;

    @Test
    @DisplayName("Test listar verticales")
    public void  ListarVerticalesHappyTest(){

       Vertical vertical=new Vertical("1",new VerticalName("QA"));


       Mockito.when(verticalRepository.listVertical()).thenReturn(Flux.just(vertical));

       var datos = verticalUseCase.execute();

       Assertions.assertEquals(datos.blockFirst().getId(),"1");
       Assertions.assertEquals(datos.blockFirst().getVerticalname().getValue(),"QA");


    }

}
