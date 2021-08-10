package co.com.sofka.okr.c2.model.usuarios.gateways;

import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import reactor.core.publisher.Mono;

public interface UsuariosRepository {
    Mono<Usuarios> adduser(Usuarios usuarios);
    Mono<Usuarios> listUser(String id);
}
