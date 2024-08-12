@extends('layouts.manager')


@section('contenu')



        <!-- begin #content -->
        <div id="content" class="content">
            <!-- begin breadcrumb -->
            <ol class="breadcrumb pull-right">
                <li><a href="javascript:;">Acceuil</a></li>
                <li><a href="javascript:;">blogs</a></li>
                <li class="active">Liste des blogs</li>
            </ol>
            <!-- end breadcrumb -->
            <!-- begin page-header -->
            <h1 class="page-header">Liste des blogs <small>Liste de tous les blogs...</small></h1>
            <!-- end page-header -->
            
            <!-- begin row -->
            <div class="row">
                <!-- begin col-12 -->
                <div class="col-md-12">

        @if(session()->has('ok'))

            <div class="alert alert-success alert-dismissible">{!! session('ok') !!}</div>

        @endif

                    <!-- begin panel -->
                    <div class="panel panel-inverse">
                        <div class="panel-heading">
                            <div class="panel-heading-btn">
                                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-repeat"></i></a>
                                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                            </div>
                            <h4 class="panel-title">Liste des blogs</h4>
                        </div>
                        <div class="panel-body">
                            <table id="data-table" class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                         <th>#</th>
                                        <th>image</th>
                                        <th>Titre</th>
                                        <th>Contenu</th>
                                        <th>Auteur</th>
                                        {{-- <th>pseudo</th>
                                        <th>Role</th> --}}
                
                                        <th>Aperçu</th>
                                        <th>modifier</th>
                                        <th>Supprimer</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    @php
                                    $i = 0;
                                    @endphp
                                        @foreach ($blogs as $blog)
                                        <tr>

                                            <td>{{ ++$i }}</td>
                                            <td><img src="{{ asset("Bloggalery/".$blog->image) }}"  width="100" height="100%" alt=""></td>
                                            <td class="text-primary"><strong>{!! $blog->title!!}</strong></td>
                                            <td class="text-primary"><strong>{!! $blog->content!!}</strong></td>
                                            <td class="text-primary"><strong>{!! $blog->author!!}</strong></td>

                                            <td>
                                                <a class="btn btn-info" href="{{ route('blog.show', $blog->id) }}">Show</a>
                                            </td>
        
                                            <td>
                                                <a href="{{ url('/blog/' . $blog->id . '/edit') }}" class="btn btn-warning btn-block" onclick="return confirm('Vraiment modifier le contenu de ce client ?');">Modifier</a>
                                            </td>
        
                                            <td>
                                                <form action="{{ url('/blog/' . $blog->id) }}" method="POST" onsubmit="return confirm('Vraiment supprimer ce utilisateur ?');">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger btn-block">Supprimer</button>
                                                </form>
                                            </td>    

                                            </td>

                                        </tr>

                                    @endforeach
                                    
                                </tbody>
                            </table>
                        </div>

     
                    </div>
                    <a href="{{ route('blog.create') }}" class="btn btn-info pull-right">Ajouter un blog</a>

                </div>
                <!-- end col-12 -->
            </div>
            <!-- end row -->
    </div>

@stop