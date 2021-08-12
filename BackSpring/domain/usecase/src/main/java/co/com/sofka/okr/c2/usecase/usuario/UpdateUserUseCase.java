package co.com.sofka.okr.c2.usecase.usuario;


import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.usuarios.gateways.UsuariosRepository;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@RequiredArgsConstructor
public class UpdateUserUseCase {


    private final UsuariosRepository usuariosRepository;

    public Mono<Usuarios> execute(Usuarios user){
        return usuariosRepository.listUser(user.getIdUser()).flatMap(usuarios ->{
                usuarios.setVerticalId(user.getVerticalId());
                return usuariosRepository.updateUser(usuarios);
        }).switchIfEmpty(Mono.error(new IllegalAccessError("Usuario no permitido")));
    }
}
