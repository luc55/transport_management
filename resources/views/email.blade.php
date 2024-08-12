

Vous avez reçu un message de  : {{ $name }}
 
<p>
Nom: {{ $name }}
</p>

<p>
Téléphone: {{ $phone }}
</p>
 
<p>
Email: {{ $email }}
</p>
 
<p>
Message: {{ $user_message }}
</p>

<p>
    Type de service: {{ $typeService }}
</p>

<p>
    @isset($formation)
        {{ $formation }}
    @endisset

    @isset($conseil)
        {{ $conseil }}
    @endisset
</p>

