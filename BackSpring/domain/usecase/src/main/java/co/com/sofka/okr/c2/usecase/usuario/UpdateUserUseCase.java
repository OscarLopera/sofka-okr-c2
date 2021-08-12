package co.com.sofka.okr.c2.usecase.usuario;


import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.usuarios.gateways.UsuariosRepository;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@RequiredArgsConstructor
public class UpdateUserUseCase {

    private final UsuariosRepository usuariosRepository;

    public Mono<Usuarios> execute(Usuarios user){
        return usuariosRepository.listUser(user.getId())
                .flatMap(usuarios -> {
                    if (usuarios.getId()!=null){
                        usuarios.setVerticalId(user.getVerticalId());
                        return usuariosRepository.updateUser(usuarios);
                    }
                    return null;
                });
    }
}
