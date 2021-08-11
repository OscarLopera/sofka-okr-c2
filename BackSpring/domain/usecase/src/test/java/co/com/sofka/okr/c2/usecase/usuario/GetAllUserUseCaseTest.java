package co.com.sofka.okr.c2.usecase.usuario;

import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.usuarios.gateways.UsuariosRepository;
import co.com.sofka.okr.c2.model.usuarios.values.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Flux;

import static org.mockito.Mockito.when;

@SpringBootTest(classes = GetAllUserUseCase.class)
class GetAllUserUseCaseTest {

    @MockBean
    UsuariosRepository usuariosRepository;
    @SpyBean
    GetAllUserUseCase getAllUserUseCase;

    @Test
    public void getAllUser(){

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

        Usuarios usuario2 = new Usuarios(
                "3",
                Name.of("Los tesos"),
                Email.of("lostesos@somosmejores.com"),
                UrlPhoto.of("aca va algo, tal vez una foto mia :)"),
                Phone.of("llamame nena"),
                FirstTime.of(true),
                VerticalId.of("124"),
                Rol.of("Desarrollador")
        );

        when(usuariosRepository.getAllUsuarios()).thenReturn(Flux.just(usuario,usuario2));

        Flux<Usuarios> result = getAllUserUseCase.execute();

        Assertions.assertEquals(result.blockFirst().getId(),usuario.getId());
        Assertions.assertEquals(result.blockLast().getId(),usuario2.getId());
    }


}