@extends('layouts.master')


@section('body')

        <main id="main" class="site-main">
         @include('../../breadcumb', ['name' => "reinitialiser mot de passe"])
        <div class="container">
            <div class="main-content">
                <div class="form-login">
                    <h2>Saisir l'adresse email pour reinitialiser le mot de passe</h2>


                    @if (session('status'))
                       <div class="cust-field-error success">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form class="clearfix"  method="POST" id="loginForm" action="{{ url('/password/email') }}">
                        {!! csrf_field() !!}

                         <div class="field {{ $errors->has('email') ? ' has-error' : '' }}">
                            <input type="email" class="form-control" name="email" value="{{ old('email') }}" required="required" placeholder="email">
                             <div class="cust-field-error">
                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                                <div>
                        </div>

                       

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-6">
                                <button type="submit" class="btn btn-primary">
                                    <i class="fa fa-btn fa-envelope"></i>lien de reinitialisation
                                </button>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </main><!-- .site-main -->
      

        

       
@endsection
