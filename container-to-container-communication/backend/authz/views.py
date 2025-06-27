from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json, secrets

RESET_CODES = {}                       # memory-only demo store
def _json(req): return json.loads(req.body or "{}")

@csrf_exempt
def register(req):
    if req.method != "POST": return JsonResponse({"detail": "POST only"}, status=405)
    data = _json(req)
    if not data.get("username") or not data.get("password"):
        return JsonResponse({"error": "username & password required"}, status=400)
    if User.objects.filter(username=data["username"]).exists():
        return JsonResponse({"error": "user exists"}, status=409)
    User.objects.create_user(username=data["username"], password=data["password"])
    return JsonResponse({"status": "registered"})

@csrf_exempt
def login(req):
    if req.method != "POST": return JsonResponse({"detail": "POST only"}, status=405)
    user = authenticate(username=_json(req).get("username"), password=_json(req).get("password"))
    if user is None:
        return JsonResponse({"error": "invalid credentials"}, status=401)
    return JsonResponse({"status": "logged_in", "token": secrets.token_hex(16)})

@csrf_exempt
def forgot_password(req):
    if req.method != "POST": return JsonResponse({"detail": "POST only"}, status=405)
    username = _json(req).get("username")
    if not User.objects.filter(username=username).exists():
        return JsonResponse({"error": "user not found"}, status=404)
    code = secrets.token_hex(3)
    RESET_CODES[username] = code
    return JsonResponse({"status": "sent", "code": code})
