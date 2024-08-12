@extends('layouts.manager')


@section('contenu')


    <div id="content" class="content">
        <!-- begin breadcrumb -->
        <ol class="breadcrumb pull-right">
            <li><a href="javascript:;">Acceuil</a></li>
            <li><a href="javascript:;">utilisateur</a></li>
            <li class="active">Ajout d un utilisateur</li>
        </ol>
        <!-- end breadcrumb -->
        <!-- begin page-header -->
        <h1 class="page-header">Ajout utilisateur <small>Les utilisateurs sont ajoutés en ligne ici...</small></h1>
        <!-- end page-header -->

        <div class="panel panel-inverse">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i
                            class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i
                            class="fa fa-repeat"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i
                            class="fa fa-minus"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i
                            class="fa fa-times"></i></a>
                </div>
                <h4 class="panel-title">Ajout d'un utilisateur</h4>
            </div>
            <div class="panel-body">
                <div class="panel-body panel-form">

                    <form action="{{ url('user') }}" method="POST" class="form-horizontal form-bordered" enctype="multipart/form-data">
                    @csrf
                    
                    <div class="form-group {{ $errors->has('name') ? 'has-error' : '' }}">
                        <label class="col-sm-2 control-label">Nom</label>
                        <div class="col-sm-10">
                            <input type="text" name="name" value="{{ old('name') }}" class="form-control" placeholder="Nom" required>
                            @if ($errors->has('name'))
                                <small class="help-block">{{ $errors->first('name') }}</small>
                            @endif
                        </div>
                    </div>

                    <div class="form-group {{ $errors->has('email') ? 'has-error' : '' }}">
                        <label class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" name="email" value="{{ old('email') }}" class="form-control" placeholder="Email" required>
                            @if ($errors->has('email'))
                                <small class="help-block">{{ $errors->first('email') }}</small>
                            @endif
                        </div>
                    </div>

                    <div class="form-group {{ $errors->has('password') ? 'has-error' : '' }}">
                        <label class="col-md-3 control-label">Mot de passe</label>
                        <div class="col-md-9">
                            <input type="password" name="password" class="form-control" placeholder="Mot de passe" required>
                            @if ($errors->has('password'))
                                <small class="help-block">{{ $errors->first('password') }}</small>
                            @endif
                        </div>
                    </div>                    

                    
                    <button type="submit" class="btn btn-primary pull-right">Envoyer</button>

                    <a href="javascript:history.back()" class="btn btn-primary">

                        <span class="glyphicon glyphicon-circle-arrow-left"></span> Retour
                
                    </a>
                </form>
            </div>
            

        </div>
       
    
    </div>

</div>


</div>

@stop

