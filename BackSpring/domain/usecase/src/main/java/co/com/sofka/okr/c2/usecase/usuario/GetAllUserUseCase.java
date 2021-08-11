package co.com.sofka.okr.c2.usecase.usuario;

import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.usuarios.gateways.UsuariosRepository;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;


@RequiredArgsConstructor
public class GetAllUserUseCase {

    private final UsuariosRepository usuariosRepository;

    public Flux<Usuarios> execute(){
        return  usuariosRepository.getAllUsuarios();
    }
}
