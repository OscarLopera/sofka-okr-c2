package co.com.sofka.okr.c2.mongo;

import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.usuarios.gateways.UsuariosRepository;
import co.com.sofka.okr.c2.model.vertical.Vertical;
import co.com.sofka.okr.c2.mongo.entities.UsuariosEntity;
import co.com.sofka.okr.c2.mongo.helper.AdapterOperations;
import co.com.sofka.okr.c2.mongo.helper.UserMapper;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public class UsuarioRepositoryAdapter extends AdapterOperations<UsuariosEntity, UsuariosEntity, String, UsuarioDBRepository>
implements UsuariosRepository {

    private UserMapper userMapper = new UserMapper();

    public UsuarioRepositoryAdapter(UsuarioDBRepository repository, ObjectMapper mapper) {

        super(repository, mapper, d -> mapper.map(d, UsuariosEntity.class));
    }

    @Override
    public Mono<Usuarios> adduser(Usuarios usuarios) {
        Mono<Usuarios> user = this.repository.save(userMapper.fromUsuarios().apply(usuarios)).map(userMapper.fromUsuariosEntity());
        return user;
    }

    @Override
    public Mono<Usuarios> listUser(String id) {
        Mono<Usuarios> user = this.repository.findById(id).map(userMapper.fromUsuariosEntity());
        return user;
    }



    @Override
    public Mono<Usuarios> updateUser(Usuarios user) {
        return this.repository.save(userMapper.fromUsuarios().apply(user)).map(userMapper.fromUsuariosEntity());

    }
}