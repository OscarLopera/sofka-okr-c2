package co.com.sofka.okr.c2.usecase.usuario;

import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.usuarios.gateways.UsuariosRepository;
import co.com.sofka.okr.c2.model.usuarios.values.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = ListUserUseCase.class)
class ListUserUseCaseTest {

    @MockBean
    private UsuariosRepository usuariosRepository;
    @SpyBean
    private ListUserUseCase listUserUseCase;

    @Test
    @DisplayName("Test use case list user")
    public void listUserHappyTest(){
        Usuarios user = new Usuarios("xxxx",
                new Name("juan"),
                new Email("juan0087@gmail.com"),
                new UrlPhoto("http://imagen/data1"),
                new Phone("3008765432"),
                new FirstTime(false),
                new VerticalId("zzzz"),
                new Rol("QA"));

        Mockito.when(usuariosRepository.listUser(user.getId())).thenReturn(Mono.just(user));

        Mono<Usuarios> resp = listUserUseCase.execute("xxxx");

        Assertions.assertEquals(resp.block().getId(),"xxxx");
        Assertions.assertEquals(resp.block().getName().getValue(),"juan");
        Assertions.assertEquals(resp.block().getRol().getValue(),"QA");
    }

}