package co.com.sofka.okr.c2.usecase.usuario;

import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.usuarios.gateways.UsuariosRepository;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@RequiredArgsConstructor
public class ListUserUseCase {

    private final UsuariosRepository usuariosRepository;

    public Mono<Usuarios> execute(String id){
        return usuariosRepository.listUser(id);
    }
}
