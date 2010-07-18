 /* Generated by generate_js_hand.py */
function client_handle_packet(p) 
{
 if (p == null) return;
 try {
  for (var i = 0; i < p.length; i++) {
    if (p[i] == null) continue;
    var packet_type = p[i]['packet_type'];
    switch (packet_type) {

    case  "packet_processing_started":
      handle_packet_processing_started(p[i]);
      break;

    case  "packet_processing_finished":
      handle_packet_processing_finished(p[i]);
      break;

    case  "packet_freeze_hint":
      handle_packet_freeze_hint(p[i]);
      break;

    case  "packet_thaw_hint":
      handle_packet_thaw_hint(p[i]);
      break;

    case  "packet_server_join_reply":
      handle_packet_server_join_reply(p[i]);
      break;

    case  "packet_authentication_req":
      handle_packet_authentication_req(p[i]);
      break;

    case  "packet_server_shutdown":
      handle_packet_server_shutdown(p[i]);
      break;

    case  "packet_endgame_report":
      handle_packet_endgame_report(p[i]);
      break;

    case  "packet_tile_info":
      handle_packet_tile_info(p[i]);
      break;

    case  "packet_game_info":
      handle_packet_game_info(p[i]);
      break;

    case  "packet_map_info":
      handle_packet_map_info(p[i]);
      break;

    case  "packet_nuke_tile_info":
      handle_packet_nuke_tile_info(p[i]);
      break;

    case  "packet_chat_msg":
      handle_packet_chat_msg(p[i]);
      break;

    case  "packet_city_remove":
      handle_packet_city_remove(p[i]);
      break;

    case  "packet_city_info":
      handle_packet_city_info(p[i]);
      break;

    case  "packet_city_short_info":
      handle_packet_city_short_info(p[i]);
      break;

    case  "packet_city_name_suggestion_info":
      handle_packet_city_name_suggestion_info(p[i]);
      break;

    case  "packet_city_sabotage_list":
      handle_packet_city_sabotage_list(p[i]);
      break;

    case  "packet_player_remove":
      handle_packet_player_remove(p[i]);
      break;

    case  "packet_player_info":
      handle_packet_player_info(p[i]);
      break;

    case  "packet_player_attribute_chunk":
      handle_packet_player_attribute_chunk(p[i]);
      break;

    case  "packet_unit_remove":
      handle_packet_unit_remove(p[i]);
      break;

    case  "packet_unit_info":
      handle_packet_unit_info(p[i]);
      break;

    case  "packet_unit_short_info":
      handle_packet_unit_short_info(p[i]);
      break;

    case  "packet_unit_combat_info":
      handle_packet_unit_combat_info(p[i]);
      break;

    case  "packet_ruleset_specialist":
      handle_packet_ruleset_specialist(p[i]);
      break;

    case  "packet_unit_diplomat_answer":
      handle_packet_unit_diplomat_answer(p[i]);
      break;

    case  "packet_diplomacy_init_meeting":
      handle_packet_diplomacy_init_meeting(p[i]);
      break;

    case  "packet_diplomacy_cancel_meeting":
      handle_packet_diplomacy_cancel_meeting(p[i]);
      break;

    case  "packet_diplomacy_create_clause":
      handle_packet_diplomacy_create_clause(p[i]);
      break;

    case  "packet_diplomacy_remove_clause":
      handle_packet_diplomacy_remove_clause(p[i]);
      break;

    case  "packet_diplomacy_accept_treaty":
      handle_packet_diplomacy_accept_treaty(p[i]);
      break;

    case  "packet_page_msg":
      handle_packet_page_msg(p[i]);
      break;

    case  "packet_conn_info":
      handle_packet_conn_info(p[i]);
      break;

    case  "packet_conn_ping_info":
      handle_packet_conn_ping_info(p[i]);
      break;

    case  "packet_conn_ping":
      handle_packet_conn_ping(p[i]);
      break;

    case  "packet_end_phase":
      handle_packet_end_phase(p[i]);
      break;

    case  "packet_start_phase":
      handle_packet_start_phase(p[i]);
      break;

    case  "packet_new_year":
      handle_packet_new_year(p[i]);
      break;

    case  "packet_spaceship_info":
      handle_packet_spaceship_info(p[i]);
      break;

    case  "packet_ruleset_unit":
      handle_packet_ruleset_unit(p[i]);
      break;

    case  "packet_ruleset_game":
      handle_packet_ruleset_game(p[i]);
      break;

    case  "packet_ruleset_government_ruler_title":
      handle_packet_ruleset_government_ruler_title(p[i]);
      break;

    case  "packet_ruleset_tech":
      handle_packet_ruleset_tech(p[i]);
      break;

    case  "packet_ruleset_government":
      handle_packet_ruleset_government(p[i]);
      break;

    case  "packet_ruleset_terrain_control":
      handle_packet_ruleset_terrain_control(p[i]);
      break;

    case  "packet_ruleset_nation":
      handle_packet_ruleset_nation(p[i]);
      break;

    case  "packet_ruleset_city":
      handle_packet_ruleset_city(p[i]);
      break;

    case  "packet_ruleset_building":
      handle_packet_ruleset_building(p[i]);
      break;

    case  "packet_ruleset_terrain":
      handle_packet_ruleset_terrain(p[i]);
      break;

    case  "packet_ruleset_control":
      handle_packet_ruleset_control(p[i]);
      break;

    case  "packet_single_want_hack_reply":
      handle_packet_single_want_hack_reply(p[i]);
      break;

    case  "packet_game_load":
      handle_packet_game_load(p[i]);
      break;

    case  "packet_options_settable_control":
      handle_packet_options_settable_control(p[i]);
      break;

    case  "packet_options_settable":
      handle_packet_options_settable(p[i]);
      break;

    case  "packet_ruleset_choices":
      handle_packet_ruleset_choices(p[i]);
      break;

    case  "packet_ruleset_nation_groups":
      handle_packet_ruleset_nation_groups(p[i]);
      break;

    case  "packet_ruleset_unit_class":
      handle_packet_ruleset_unit_class(p[i]);
      break;

    case  "packet_ruleset_base":
      handle_packet_ruleset_base(p[i]);
      break;

    case  "packet_ruleset_effect":
      handle_packet_ruleset_effect(p[i]);
      break;

    case  "packet_ruleset_effect_req":
      handle_packet_ruleset_effect_req(p[i]);
      break;

    case  "packet_ruleset_resource":
      handle_packet_ruleset_resource(p[i]);
      break;

    case  "packet_freeze_client":
      handle_packet_freeze_client(p[i]);
      break;

    case  "packet_thaw_client":
      handle_packet_thaw_client(p[i]);
      break;

    case  "packet_begin_turn":
      handle_packet_begin_turn(p[i]);
      break;

    case  "packet_end_turn":
      handle_packet_end_turn(p[i]);
      break;

    case  "packet_scenario_info":
      handle_packet_scenario_info(p[i]);
      break;

    case  "packet_vote_new":
      handle_packet_vote_new(p[i]);
      break;

    case  "packet_vote_update":
      handle_packet_vote_update(p[i]);
      break;

    case  "packet_vote_remove":
      handle_packet_vote_remove(p[i]);
      break;

    case  "packet_vote_resolve":
      handle_packet_vote_resolve(p[i]);
      break;

    case  "packet_edit_object_created":
      handle_packet_edit_object_created(p[i]);
      break;

    case  "packet_connect_msg":
      handle_packet_connect_msg(p[i]);
      break;
 
    }
  }
  
  update_map_canvas_check();

 } catch(e) {
   if (e.message != null && e.fileName != null && e.lineNumber != null) {
     js_breakpad_report(e.message, e.fileName, e.lineNumber);
   } else if (e.message != null) {
     js_breakpad_report(e.message, "generate_js_hand.py", 0);
   } else {
     js_breakpad_report("unknown network error", "generate_js_hand.py", 0);
   }
 }

}
