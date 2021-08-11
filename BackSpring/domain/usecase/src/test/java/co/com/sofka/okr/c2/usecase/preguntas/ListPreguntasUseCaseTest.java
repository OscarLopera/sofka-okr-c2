package co.com.sofka.okr.c2.usecase.preguntas;

import co.com.sofka.okr.c2.model.preguntas.Preguntas;
import co.com.sofka.okr.c2.model.preguntas.gateways.PreguntasRepository;
import co.com.sofka.okr.c2.model.preguntas.values.Pregunta;
import co.com.sofka.okr.c2.model.preguntas.values.Respuesta;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Flux;

@SpringBootTest(classes = ListPreguntasUseCase.class)
class ListPreguntasUseCaseTest {

    @MockBean
    private PreguntasRepository preguntasRepository;
    @SpyBean
    private ListPreguntasUseCase listPreguntasUseCase;

    @Test
    @DisplayName("Test listar Preguntas")
    public void listarPreguntasTest(){

        Preguntas pregunta1 = new Preguntas("xxxx",
                new Pregunta("¿ Que es un OKR?"),
                new Respuesta("OkR son las siglas en ingles de Objectic and key results,Podemos defin...")
        );
        Preguntas pregunta2 = new Preguntas("zzzz",
                new Pregunta("¿ Cuáles son los beneficios de los OKR?"),
                new Respuesta("Imponer un sentimiento de compromiso para la consecución de objetivos....")
        );

        Mockito.when(preguntasRepository.listPreguntas()).thenReturn( Flux.just(pregunta1,pregunta2));

        Flux<Preguntas> resp = listPreguntasUseCase.execute();

        Assertions.assertEquals(resp.blockFirst().getId(),"xxxx");
        Assertions.assertEquals(resp.blockLast().getId(),"zzzz");
        Assertions.assertEquals(resp.blockFirst().getPregunta().getValue(),pregunta1.getPregunta().getValue());
        Assertions.assertEquals(resp.blockLast().getRespuesta().getValue(),pregunta2.getRespuesta().getValue());

    }
}