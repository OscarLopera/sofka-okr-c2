package co.com.sofka.okr.c2.mongo;


import co.com.sofka.okr.c2.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

import java.util.function.Function;

public class OKRsRepositoryAdapter extends AdapterOperations<Object/* change for domain model */, Object/* change for adapter model */, String, OKRsDBRepository>
// implements ModelRepository from domain
{

    public OKRsRepositoryAdapter(OKRsDBRepository repository, ObjectMapper mapper) {
        super(repository, mapper, d -> mapper.map(d, Object.class/* change for domain model */));
    }
}
