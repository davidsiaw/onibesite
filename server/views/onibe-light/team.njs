{% extends "layouts/layout.njs" %}

{% set data = data %}

{% block content %}
<div>
{#<div class="navbar-offset">#}
    <div style=" background: #336699" >
        <div class="container">
            <div class="row" style="height: 360px;display: flex; align-items: center">
                <div class="col-md-12" >
                    <div class="wrap">
                        <h1 style="color: #FFFFFF">Meet the team</h1>
                        <div style="color: #FFFFFF">Awesome</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="team voffset4">
        <div class="container voffset">
            <div class="row">
                {% for item in data.team %}
                    <div class="col-md-3 team-member">
                        <a class="team-member-image-link" href="/team/{{ item.username }}">
                            <img src="{{ item.picture }}" class="team-member-image">
                        </a>
                        <a class="team-member-image-link" href="/team/{{ item.username }}">
                            <h4 class="team-member-name">{{ item.username }}</h4>
                        </a>
                        <a class="team-member-image-link" href="/team/{{ item.username }}">
                            <p class="team-member-title">{{ item.profile }}</p>
                        </a>
                    </div>
                {% endfor %}
            </div>
        </div>
    </section>
</div>
{% endblock %}