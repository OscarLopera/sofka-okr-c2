package co.com.sofka.okr.c2.mongo;

import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.usuarios.gateways.UsuariosRepository;
import co.com.sofka.okr.c2.mongo.entities.UsuariosEntity;
import co.com.sofka.okr.c2.mongo.helper.AdapterOperations;
import co.com.sofka.okr.c2.mongo.helper.UserMapper;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public class UsuarioRepositoryAdapter extends AdapterOperations<UsuariosEntity, UsuariosEntity, String, UsuarioDBRepository>
//implements UsuariosRepository
{


    public UsuarioRepositoryAdapter(UsuarioDBRepository repository, ObjectMapper mapper) {

        super(repository, mapper, d -> mapper.map(d, UsuariosEntity.class));
    }

}
