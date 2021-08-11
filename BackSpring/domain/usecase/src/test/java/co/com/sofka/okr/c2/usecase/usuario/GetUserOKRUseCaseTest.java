package co.com.sofka.okr.c2.usecase.usuario;

import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.usuarios.gateways.UsuariosRepository;
import co.com.sofka.okr.c2.model.usuarios.values.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import static org.mockito.Mockito.when;

@SpringBootTest(classes = GetUserOKRUseCase.class)
class GetUserOKRUseCaseTest {

    @MockBean
    UsuariosRepository usuariosRepository;

    @SpyBean
    GetUserOKRUseCase getUserOKRUseCase;

    @Test
    public void getUser(){

        Usuarios usuario = new Usuarios(
                "1",
                Name.of("Los tesos"),
                Email.of("lostesos@somosmejores.com"),
                UrlPhoto.of("aca va algo, tal vez una foto mia :)"),
                Phone.of("llamame nena"),
                FirstTime.of(true),
                VerticalId.of("124"),
                Rol.of("Desarrollador")
        );

        when(usuariosRepository.getUsuarioOKR(usuario.getId())).thenReturn(Mono.just(usuario));

        Mono<Usuarios> result = getUserOKRUseCase.execute(usuario.getId());

        Assertions.assertEquals(result.block().getId(),usuario.getId());
    }
}