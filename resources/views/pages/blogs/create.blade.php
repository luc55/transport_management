@extends('layouts.manager')


@section('contenu')


    <div id="content" class="content">
        <!-- begin breadcrumb -->
        <ol class="breadcrumb pull-right">
            <li><a href="javascript:;">Acceuil</a></li>
            <li><a href="javascript:;">blog</a></li>
            <li class="active">Ajout d un blog</li>
        </ol>
        <!-- end breadcrumb -->
        <!-- begin page-header -->
        <h1 class="page-header">Ajout blog <small>Les blogs sont ajoutés en ligne ici...</small></h1>
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
                <h4 class="panel-title">Ajout d'un blog</h4>
            </div>
            <div class="panel-body">
                <div class="panel-body panel-form">

                    <form action="{{ url('blog') }}" method="POST" class="form-horizontal form-bordered" enctype="multipart/form-data">
                    @csrf

                    <div class="form-group {{ $errors->has('image') ? 'has-error' : '' }}">
                        <label class="col-sm-2 control-label">Image</label>
                        <div class="col-sm-10">
                            <input type="file" name="image" value="{{ old('image') }}" class="form-control" placeholder="Image" required>
                            @if ($errors->has('image'))
                                <small class="help-block
                                ">{{ $errors->first('image') }}</small>
                            @endif
                        </div>
                    </div>

                    <div class="form-group {{ $errors->has('author') ? 'has-error' : '' }}">
                        <label class="col-sm-2 control-label">Auteur</label>
                        <div class="col-sm-10">
                            <input type="text" name="author" value="{{ old('author') }}" class="form-control" placeholder="auteur" required>
                            @if ($errors->has('author'))
                                <small class="help-block">{{ $errors->first('author') }}</small>
                            @endif
                        </div>
                    </div>
                    
                    <div class="form-group {{ $errors->has('title') ? 'has-error' : '' }}">
                        <label class="col-sm-2 control-label">Titre</label>
                        <div class="col-sm-10">
                            <input type="text" name="title" value="{{ old('title') }}" class="form-control" placeholder="Titre" required>
                            @if ($errors->has('title'))
                                <small class="help-block">{{ $errors->first('title') }}</small>
                            @endif
                        </div>
                    </div>
                 

                    <div class="form-group {{ $errors->has('content') ? 'has-error' : '' }}">
                        <label class="col-sm-2 control-label">Contenu</label>
                        <div class="col-sm-10">
                            <input type="text" name="content" value="{{ old('content') }}" class="form-control" placeholder="Contenu" required>
                            @if ($errors->has('content'))
                                <small class="help-block">{{ $errors->first('content') }}</small>
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

