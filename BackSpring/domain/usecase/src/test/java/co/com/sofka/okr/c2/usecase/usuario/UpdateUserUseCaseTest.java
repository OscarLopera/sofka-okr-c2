package co.com.sofka.okr.c2.usecase.usuario;

import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.usuarios.gateways.UsuariosRepository;
import co.com.sofka.okr.c2.model.usuarios.values.*;
import co.com.sofka.okr.c2.model.vertical.Vertical;
import co.com.sofka.okr.c2.model.vertical.gateways.VerticalRepository;
import co.com.sofka.okr.c2.model.vertical.values.VerticalName;
import co.com.sofka.okr.c2.usecase.vertical.VerticalUseCase;
import lombok.var;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;


@SpringBootTest(classes = UpdateUserUseCase.class)
class UpdateUserUseCaseTest {

    @MockBean
    private UsuariosRepository usuariosRepository;
    @SpyBean
    UpdateUserUseCase updateUserUseCase;

    @Test
    @DisplayName("Test Modificar usuario")
    public void modificarUsuarioHappyTest() {

        Usuarios usuarios = new Usuarios("1",
                new Name("Omar"),
                new Email("juan0087@gmail.com"),
                new UrlPhoto("http://imagen/data1"),
                new Phone("3008765432"),
                new FirstTime(false),
                new VerticalId("123"),
                new Rol("QA")
        );

        Mockito.when(usuariosRepository.updateUser(any(Usuarios.class))).thenReturn(Mono.just(usuarios));


        var respuesta = updateUserUseCase.execute(usuarios);

        Assertions.assertEquals(respuesta.block().getId(), "1");
        Assertions.assertEquals(respuesta.block().getName().getValue(), "Omar");
        Assertions.assertEquals(respuesta.block().getEmail().getValue(), "juan0087@gmail.com");
        Assertions.assertEquals(respuesta.block().getUrlPhoto().getValue(), "http://imagen/data1");
        Assertions.assertEquals(respuesta.block().getPhone().getValue(), "3008765432");
        Assertions.assertEquals(respuesta.block().getFirstTime().getValue(), false);
        Assertions.assertEquals(respuesta.block().getVerticalId().getValue(), "123");
        Assertions.assertEquals(respuesta.block().getRol().getValue(), "QA");


    }


    @Test
    @DisplayName("Sad test empty use case update user")
    public void updateUserSadTestEmpty() throws InterruptedException {

        Assertions.assertThrows(IllegalArgumentException.class, () -> {
            updateUserUseCase.execute(new Usuarios("xxxx",
                            new Name(""),
                            new Email("juan0087@gmail.com"),
                            new UrlPhoto("http://imagen/data1"),
                            new Phone("3008765432"),
                            new FirstTime(false),
                            new VerticalId("12"),
                            new Rol("QA")
                    )

            );
        });

        Assertions.assertThrows(IllegalArgumentException.class,()->{
            updateUserUseCase.execute(new Usuarios("xxxx",
                            new Name("juan"),
                            new Email(""),
                            new UrlPhoto("http://imagen/data1"),
                            new Phone("3008765432"),
                            new FirstTime(false),
                            new VerticalId("zzzz"),
                            new Rol("QA")
                    )

            );
        });

        Assertions.assertThrows(IllegalArgumentException.class,()->{
            updateUserUseCase.execute(new Usuarios("",
                            new Name("juan"),
                            new Email("juank9225@gmail.com"),
                            new UrlPhoto("http://imagen/data1"),
                            new Phone(""),
                            new FirstTime(false),
                            new VerticalId("zzzz"),
                            new Rol("QA")
                    )

            );
        });



    }


}