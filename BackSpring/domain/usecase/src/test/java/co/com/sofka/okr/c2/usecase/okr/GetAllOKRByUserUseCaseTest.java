package co.com.sofka.okr.c2.usecase.okr;


import co.com.sofka.okr.c2.model.okrs.OKRS;
import co.com.sofka.okr.c2.model.okrs.gateways.OKRSRepository;
import co.com.sofka.okr.c2.model.okrs.values.*;
import co.com.sofka.okr.c2.model.usuarios.values.VerticalId;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Flux;


import static org.mockito.Mockito.when;

@SpringBootTest(classes = GetAllOKRByUserUseCase.class)
class GetAllOKRByUserUseCaseTest {

    @MockBean
    OKRSRepository okrsRepository;
    @SpyBean
    GetAllOKRByUserUseCase getAllOKRByUserUseCase;

    @Test
    public void getAllOKR(){
        OKRS okrs = new OKRS(
                IdOkr.of("1"),
                Objective.of("Primer test"),
                Title.of("Si se puede"),
                "14",
                Description.of("Estamos en eso"),
                VerticalId.of("21"),
                15.0
                );
        OKRS okrs2 = new OKRS(
                IdOkr.of("12"),
                Objective.of("Primer test"),
                Title.of("Si se puede"),
                "14",
                Description.of("Estamos en eso"),
                VerticalId.of("21"),
                15.0
        );

        when(okrsRepository.getAllOkrByUser(Mockito.any(String.class))).thenReturn(Flux.just(okrs,okrs2));

        Flux<OKRS> result = getAllOKRByUserUseCase.execute(okrs.getManagerId());
        Assertions.assertEquals(result.blockFirst().getManagerId(),okrs.getManagerId());
        Assertions.assertEquals(result.blockLast().getManagerId(),okrs2.getManagerId());
    }
}