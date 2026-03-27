from flask import Blueprint, jsonify, request

bp = Blueprint('notifications', __name__)

@bp.post('/webpush/subscribe')
def webpush_subscribe():
    payload = request.get_json(force=True, silent=True) or {}
    # TODO: store subscription with parental consent flag for minors
    return jsonify({"ok": True, "stored": bool(payload)})

@bp.post('/sms/send')
def sms_send():
    data = request.get_json(force=True, silent=True) or {}
    # TODO: integrate SMS provider (e.g., Twilio). Respect consent.
    return jsonify({"queued": True, "to": data.get('to')})








