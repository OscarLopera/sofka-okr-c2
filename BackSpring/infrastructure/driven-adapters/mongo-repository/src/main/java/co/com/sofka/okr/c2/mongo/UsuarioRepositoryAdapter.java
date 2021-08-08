package co.com.sofka.okr.c2.mongo;

import co.com.sofka.okr.c2.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

@Repository
public class UsuarioRepositoryAdapter extends AdapterOperations<Object/* change for domain model */, Object/* change for adapter model */, String, UsuarioDBRepository>
// implements ModelRepository from domain
{

    public UsuarioRepositoryAdapter(UsuarioDBRepository repository, ObjectMapper mapper) {
        /**
         *  Could be use mapper.mapBuilder if your domain model implement builder pattern
         *  super(repository, mapper, d -> mapper.mapBuilder(d,ObjectModel.ObjectModelBuilder.class).build());
         *  Or using mapper.map with the class of the object model
         */
        super(repository, mapper, d -> mapper.map(d, Object.class/* change for domain model */));
    }
}
