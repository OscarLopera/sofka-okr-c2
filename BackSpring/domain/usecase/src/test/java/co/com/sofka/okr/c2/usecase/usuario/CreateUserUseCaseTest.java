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

@SpringBootTest(classes = CreateUserUseCase.class)
class CreateUserUseCaseTest {

    @MockBean
    private UsuariosRepository usuariosRepository;
    @SpyBean
    private CreateUserUseCase createUserUseCase;

    @Test
    @DisplayName("Happy test use case create user")
    public void createUserHappyTest(){
        Usuarios user = new Usuarios("xxxx",
                new Name("juan"),
                new Email("juan0087@gmail.com"),
                new UrlPhoto("http://imagen/data1"),
                new Phone("3008765432"),
                new FirstTime(false),
                new VerticalId("zzzz"),
                new Rol("QA"));

        Mockito.when(usuariosRepository.adduser(user)).thenReturn(Mono.just(user));

        Mono<Usuarios> resp = createUserUseCase.execute(user);

        Assertions.assertEquals(resp.block().getId(),"xxxx");
        Assertions.assertEquals(resp.block().getName().getValue(),"juan");
        Assertions.assertEquals(resp.block().getRol().getValue(),"QA");
    }

    @Test
    @DisplayName("Sab test use case create user")
    public void createUserSabTestRequired(){
        Usuarios user = new Usuarios();
        user.setId("xxx");
        user.setEmail(new Email("juank99@gmail.com"));
        user.setUrlPhoto(new UrlPhoto("juan0087@gmail.com"));
        user.setPhone(new Phone("3008765432"));
        user.setFirstTime(new FirstTime(false));
        user.setVerticalId(new VerticalId("zzzz"));
        user.setRol(new Rol("QA"));

        Mockito.when(usuariosRepository.adduser(user)).thenThrow(new NullPointerException());

        Assertions.assertThrows(NullPointerException.class,()->{
            createUserUseCase.execute(user);
        });;
    }

    @Test
    @DisplayName("Sab test empty use case create user")
    public void createUserSabTestEmpty() throws InterruptedException {
        Usuarios user = new Usuarios();

        Assertions.assertThrows(IllegalArgumentException.class,()->{
            createUserUseCase.execute(new Usuarios("xxxx",
                    new Name(""),
                    new Email("juan0087@gmail.com"),
                    new UrlPhoto("http://imagen/data1"),
                    new Phone("3008765432"),
                    new FirstTime(false),
                    new VerticalId("zzzz"),
                    new Rol("QA")
                    )

            );
        });

        Assertions.assertThrows(IllegalArgumentException.class,()->{
            createUserUseCase.execute(new Usuarios("xxxx",
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
            createUserUseCase.execute(new Usuarios("",
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
    }

}