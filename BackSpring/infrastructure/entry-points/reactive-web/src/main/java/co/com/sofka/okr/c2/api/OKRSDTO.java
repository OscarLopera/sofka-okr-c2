package co.com.sofka.okr.c2.api;

import co.com.sofka.okr.c2.model.okrs.KRS;
import co.com.sofka.okr.c2.model.okrs.values.HistoricalProgress;

import java.util.List;

public class OKRSDTO {

    private String id;
    private String objective;
    private String title;
    private String managerId;
    private String description;
    private String verticalId;
    private Double progress;
    private List<HistoricalProgress> historicalProgress;
    private List<KRS> krs;
}
