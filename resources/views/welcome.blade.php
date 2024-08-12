@extends('layouts.manager')
@section('contenu')
   
        <!-- begin #content -->
        <div id="content" class="content">
            <!-- begin breadcrumb -->
            <ol class="breadcrumb pull-right">
                <li><a href="javascript:;">Accueil</a></li>
                <li><a href="javascript:;">Administration</a></li>
                
            </ol>
            <!-- end breadcrumb -->
            <!-- begin page-header -->
            <h1 class="page-header">SAHRAOUI<small>Administration.</small></h1>
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <div class="widget widget-stats bg-blue">
                        <div class="stats-icon stats-icon-lg"><i class="fa fa-user fa-fw"></i></div>
                        <div class="stats-title">nombre d'intervenants</div>
                        <div class="stats-number" style="">9</div>
                        <div class="stats-progress progress">
                            <div class="progress-bar" style="width: 40.5%;"></div>
                        </div>
                      
                    </div>
                </div>
                <!-- end col-3 -->
                <!-- begin col-3 -->
                <div class="col-md-4 col-sm-6">
                    <div class="widget widget-stats bg-purple">
                        <div class="stats-icon stats-icon-lg"><i class="fa fa-globe fa-fw"></i></div>
                        <div class="stats-title">nombre de projets</div>
                        <div class="stats-number">0</div>
                        <div class="stats-progress progress">
                            <div class="progress-bar" style="width: 76.3%;"></div>
                        </div>
                     
                    </div>
                </div>
                <!-- end col-3 -->
                <!-- begin col-3 -->
                <div class="col-md-4 col-sm-6">
                    <div class="widget widget-stats bg-black">
                        <div class="stats-icon stats-icon-lg"><i class="fa fa-pencil fa-fw"></i></div>
                        <div class="stats-title">Nombre d'interventions</div>
                        <div class="stats-number">9</div>
                        <div class="stats-progress progress">
                            <div class="progress-bar" style="width: 54.9%;"></div>
                        </div>
                
                    </div>
                </div>
                <!-- end col-3 -->
            </div>
            <!-- end row -->
            
            <!-- begin row -->
            <div class="row">
                <div class="col-md-8">
                    <div class="widget-chart with-sidebar bg-black">
                        <div class="widget-chart-content">
                            <h4 class="chart-title">
                                Analyse 
                                <small>Traffic</small>
                            </h4>
                            <div id="visitors-line-chart" class="morris-inverse" style="height: 260px;"></div>
                        </div>
                        <div class="widget-chart-sidebar bg-black-darker">
                            <div class="chart-number">
                               
                                <small>Traffics</small>
                            </div>
                            <div id="visitors-donut-chart" style="height: 160px"></div>
                           
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="panel panel-inverse" data-sortable-id="index-1">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                Nos meilleurs articles
                            </h4>
                        </div>
                      
                        <div class="list-group">
                       
                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->
            <!-- begin row -->
            <div class="row">
                <!-- begin col-4 -->
                <div class="col-md-4">
                    <!-- begin panel -->
                    <div class="panel panel-inverse" data-sortable-id="index-2">
                        <div class="panel-heading">
                            <h4 class="panel-title"><span class="label label-success pull-right"></span></h4>
                        </div>
                        <div class="panel-body bg-silver">
                            <div data-scrollbar="true" data-height="225px">
                        </div>
                    </div>
                    <!-- end panel -->
                </div>
                <!-- end col-4 -->
                <!-- begin col-4 -->
                <div class="col-md-8">
                    <!-- begin panel -->
                    <div class="panel panel-inverse" data-sortable-id="index-3">
                        <div class="panel-heading">
                            <h4 class="panel-title">Liste des derniers articles</h4>
                        </div>
                        <div id="schedule-calendar" class="bootstrap-calendar"></div>
                       
                    </div>
                    <!-- end panel -->
                </div>
                <!-- end col-4 -->
                <!-- begin col-4 -->
                
              </div>
            <!-- end row -->
        </div>
        <!-- end #content -->
    
@stop
