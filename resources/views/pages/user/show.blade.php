@extends('layouts.manager')


@section('contenu')


    <div id="content" class="content">
        <!-- begin breadcrumb -->
        <ol class="breadcrumb pull-right">
            <li><a href="/">Acceuil</a></li>
            <li><a href="{{ url('User') }}">User</a></li>
            <li class="active">Fiche</li>
        </ol>
        <!-- end breadcrumb -->
        <!-- begin page-header -->
        <h1 class="page-header">Fiche User <small></small></h1>
        <!-- end page-header -->

        <div class="row">
            <!-- begin col-6 -->
            <div class="col-sm-offset-3 col-sm-6">
                <!-- begin panel -->
                <div class="panel panel-inverse" data-sortable-id="form-stuff-1">
                    <div class="panel-heading">

                        <h4 class="panel-title">Fiche User</h4>
                    </div>
                    <div class="panel-body ">
                        <p><h4>Nom :</h4> {!! $user->name !!} </p>
                        <p><h4>Email:</h4> {!! $user->email !!} </p>
                        <a href="javascript:history.back()" class="btn btn-primary">
                            <span class="glyphicon glyphicon-circle-arrow-left"></span> Retour
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop
