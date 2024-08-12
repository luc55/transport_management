@extends('layouts.manager')


@section('contenu')


    <div id="content" class="content">
        <!-- begin breadcrumb -->
        <ol class="breadcrumb pull-right">
            <li><a href="javascript:;">Acceuil</a></li>
            <li><a href="javascript:;">utilisateur</a></li>
            <li class="active">modification d un utilisateur</li>
        </ol>
        <!-- end breadcrumb -->
        <!-- begin page-header -->
        <h1 class="page-header">modification utilisateur <small>Les projets sont modifiés en ligne ici...</small></h1>
        <!-- end page-header -->

        <div class="row">
            <!-- begin col-6 -->
            <div class="col-sm-12">
                <!-- begin panel -->
                <div class="panel panel-inverse" data-sortable-id="form-stuff-1">
                    <div class="panel-heading">
                        <div class="panel-heading-btn">
                            <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default"
                                data-click="panel-expand"><i class="fa fa-expand"></i></a>
                            <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success"
                                data-click="panel-reload"><i class="fa fa-repeat"></i></a>
                            <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning"
                                data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                            <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger"
                                data-click="panel-remove"><i class="fa fa-times"></i></a>
                        </div>
                        <h4 class="panel-title">modification d'une agence</h4>
                    </div>
                    <div class="panel-body panel-form">
                        <form action="{{ route('agency.update', $agency->id) }}" method="POST" enctype="multipart/form-data" class="form-horizontal panel form-bordered">
                            @csrf
                            @method('PUT')    
        
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
                            
                            <div class="form-group {{ $errors->has('name') ? 'has-error' : '' }}">
                                <label class="col-sm-2 control-label">Nom</label>
                                <div class="col-sm-10">
                                    <input type="text" name="name" value="{{ old('name') }}" class="form-control" placeholder="Nom" required>
                                    @if ($errors->has('name'))
                                        <small class="help-block">{{ $errors->first('name') }}</small>
                                    @endif
                                </div>
                            </div>
                         
        
                            <div class="form-group {{ $errors->has('description') ? 'has-error' : '' }}">
                                <label class="col-sm-2 control-label">Description</label>
                                <div class="col-sm-10">
                                    <input type="text" name="description" value="{{ old('description') }}" class="form-control" placeholder="Description" required>
                                    @if ($errors->has('description'))
                                        <small class="help-block">{{ $errors->first('description') }}</small>
                                    @endif
                                </div>
                            </div>
                            
                        
                            <button type="submit" class="btn btn-primary pull-right">Envoyer</button>
                        </form>
                        

                    </div>

                </div>

            </div>
        </div>

    </div>

@stop
