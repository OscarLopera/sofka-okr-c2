package co.com.sofka.okr.c2.mongo;

import co.com.sofka.okr.c2.model.preguntas.Preguntas;
import co.com.sofka.okr.c2.model.preguntas.gateways.PreguntasRepository;
import co.com.sofka.okr.c2.mongo.entities.PreguntasEntity;
import co.com.sofka.okr.c2.mongo.helper.AdapterOperations;
import co.com.sofka.okr.c2.mongo.helper.PreguntasMapper;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public class PreguntasRepositoryAdapter extends AdapterOperations<PreguntasEntity, PreguntasEntity, String, PreguntasDBRepository>
implements PreguntasRepository {

    private PreguntasMapper preguntasMapper = new PreguntasMapper();

    public PreguntasRepositoryAdapter(PreguntasDBRepository repository, ObjectMapper mapper) {

        super(repository, mapper, d -> mapper.map(d, PreguntasEntity.class));
    }

    @Override
    public Flux<Preguntas> listPreguntas() {
        return this.repository.findAll().map(preguntasMapper.fromPreguntasEntity());
    }
}