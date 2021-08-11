package co.com.sofka.okr.c2.mongo;

import co.com.sofka.okr.c2.model.okrs.gateways.OKRSRepository;
import co.com.sofka.okr.c2.mongo.entities.OKRS;
import co.com.sofka.okr.c2.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

import java.util.function.Function;

public class OKRsRepositoryAdapter extends AdapterOperations<OKRS, OKRS, String, OKRsDBRepository>
// implements ModelRepository from domain
{

    public OKRsRepositoryAdapter(OKRsDBRepository repository, ObjectMapper mapper) {
        super(repository, mapper, d -> mapper.map(d, OKRS.class));
    }
}
