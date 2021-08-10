package co.com.sofka.okr.c2.mongo;


import co.com.sofka.okr.c2.model.vertical.Vertical;
import co.com.sofka.okr.c2.model.vertical.gateways.VerticalRepository;
import co.com.sofka.okr.c2.mongo.entities.VerticalEntity;
import co.com.sofka.okr.c2.mongo.helper.AdapterOperations;
import co.com.sofka.okr.c2.mongo.helper.VerticalMapper;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public class VerticalRepositoryAdapter extends AdapterOperations<VerticalEntity, VerticalEntity, String, VerticalDBRepository>
        implements VerticalRepository {

    private VerticalMapper verticalMapper= new VerticalMapper();

    public VerticalRepositoryAdapter(VerticalDBRepository repository, ObjectMapper mapper) {

        super(repository, mapper, d -> mapper.map(d, VerticalEntity.class));
    }

    @Override
    public Flux<Vertical> listVertical() {
        return this.repository.findAll().map(verticalMapper.fromVerticalEntityToVertical());
    }

    @Override
    public Mono<Vertical> getVerticalById(String id) {
        return  this.repository.findById(id).map(verticalMapper.fromVerticalEntityToVertical());
    }


}
