package co.com.sofka.okr.c2.mongo;


import co.com.sofka.okr.c2.model.okrs.OKRS;
import co.com.sofka.okr.c2.model.okrs.gateways.OKRSRepository;
import co.com.sofka.okr.c2.mongo.entities.OKREntity;
import co.com.sofka.okr.c2.mongo.helper.AdapterOperations;
import co.com.sofka.okr.c2.mongo.helper.EntityMapper;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public class OKRsRepositoryAdapter extends AdapterOperations<OKREntity, OKREntity, String, OKRsDBRepository>
        implements OKRSRepository {
    private EntityMapper entityMapper = new EntityMapper();

    public OKRsRepositoryAdapter(OKRsDBRepository repository, ObjectMapper mapper) {
        super(repository, mapper, d -> mapper.map(d, OKREntity.class));
    }

    @Override
    public Mono<OKRS> getOkrById(String id) {
        return this.repository.findById(id).map(entityMapper.fromOKREntity());
    }
}

