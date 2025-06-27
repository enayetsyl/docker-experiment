from django.http import JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt
import json

TODOS = []          # 💾  in-memory list – gone when the process restarts

@csrf_exempt
def todo_handler(request):
    if request.method == "POST":                     # Create
        body = json.loads(request.body or "{}")
        TODOS.append(body.get("text", ""))
        return JsonResponse({"status": "created", "todos": TODOS})

    if request.method == "GET":                      # Read
        return JsonResponse({"todos": TODOS})

    if request.method == "PUT":                      # Update
        body = json.loads(request.body or "{}")
        idx, text = body.get("id"), body.get("text", "")
        if 0 <= idx < len(TODOS):
            TODOS[idx] = text
            return JsonResponse({"status": "updated", "todos": TODOS})
        return JsonResponse({"error": "id out of range"}, status=404)

    if request.method == "DELETE":                   # Delete
        body = json.loads(request.body or "{}")
        idx = body.get("id")
        if 0 <= idx < len(TODOS):
            TODOS.pop(idx)
            return JsonResponse({"status": "deleted", "todos": TODOS})
        return JsonResponse({"error": "id out of range"}, status=404)

    return HttpResponseNotAllowed(["GET", "POST", "PUT", "DELETE"])
