@extends('layouts.master')


@section('body')

        <main id="main" class="site-main">
         @include('../../breadcumb', ['name' => "reinitialisation mot de passe"])
        <div class="container">
            <div class="main-content">
                <div class="form-login">
                    <h2>Reinitialisez votre mot de passe</h2>
                    <form action="{{ url('/password/reset') }}" method="post" id="loginForm" class="clearfix">
                         {!! csrf_field() !!}
                        <div class="cust-field-error">
                             @if(session()->has('danger'))

                             <div class="alert alert-danger alert-dismissible">{!! session('danger') !!}</div>

                             @endif
                           
                        </div>
                         <input type="hidden" name="token" value="{{ $token }}">
                      
                        <div class="field {{ $errors->has('email') ? ' has-error' : '' }}">
                           <input type="email" placeholder="email" name="email" value="{{ $email or old('email') }}" required="required">

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                        </div>
                        <div class="field {{ $errors->has('password') ? ' has-error' : '' }}">
                            <input type="password" id="password" name="password" placeholder="Mot de passe" required="required" />

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                        </div>
                        <div class="field {{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                           
                           <input type="password" class="form-control"  placeholder="Confirmer mot de passe " name="password_confirmation" required="required">

                                @if ($errors->has('password_confirmation'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                                    </span>
                                @endif
                        </div>
                        <div class="inline clearfix">

                            <button type="submit" value="Send Messager" class="btn-primary"> <i class="fa fa-btn fa-refresh"></i>Reinitialiser mot de passe</button>
                            
                        </div>
                        <hr>
                       
                    </form>
                </div>
            </div>
        </div>
    </main><!-- .site-main -->
      


       
@endsection



