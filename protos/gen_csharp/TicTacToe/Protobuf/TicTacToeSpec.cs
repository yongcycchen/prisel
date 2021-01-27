// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: tic_tac_toe/tic_tac_toe_spec.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace TicTacToe.Protobuf {

  /// <summary>Holder for reflection information generated from tic_tac_toe/tic_tac_toe_spec.proto</summary>
  public static partial class TicTacToeSpecReflection {

    #region Descriptor
    /// <summary>File descriptor for tic_tac_toe/tic_tac_toe_spec.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static TicTacToeSpecReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CiJ0aWNfdGFjX3RvZS90aWNfdGFjX3RvZV9zcGVjLnByb3RvEgt0aWNfdGFj",
            "X3RvZRoYcHJpc2VsL2Fubm90YXRpb25zLnByb3RvIi0KC01vdmVQYXlsb2Fk",
            "EhAKCHBvc2l0aW9uGAEgASgNOgyatRgICgRtb3ZlEAEieQoQR2FtZVN0YXRl",
            "UGF5bG9hZBIOCgZwbGF5ZXIYASADKAkSCwoDbWFwGAIgAygJEhYKDmN1cnJl",
            "bnRfcGxheWVyGAMgASgNEhMKBndpbm5lchgEIAEoCUgAiAEBOhCatRgMCgpn",
            "YW1lX3N0YXRlQgkKB193aW5uZXJCFaoCElRpY1RhY1RvZS5Qcm90b2J1ZmIG",
            "cHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Prisel.Protobuf.AnnotationsReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::TicTacToe.Protobuf.MovePayload), global::TicTacToe.Protobuf.MovePayload.Parser, new[]{ "Position" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::TicTacToe.Protobuf.GameStatePayload), global::TicTacToe.Protobuf.GameStatePayload.Parser, new[]{ "Player", "Map", "CurrentPlayer", "Winner" }, new[]{ "Winner" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class MovePayload : pb::IMessage<MovePayload>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<MovePayload> _parser = new pb::MessageParser<MovePayload>(() => new MovePayload());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<MovePayload> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::TicTacToe.Protobuf.TicTacToeSpecReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public MovePayload() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public MovePayload(MovePayload other) : this() {
      position_ = other.position_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public MovePayload Clone() {
      return new MovePayload(this);
    }

    /// <summary>Field number for the "position" field.</summary>
    public const int PositionFieldNumber = 1;
    private uint position_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public uint Position {
      get { return position_; }
      set {
        position_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as MovePayload);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(MovePayload other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Position != other.Position) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Position != 0) hash ^= Position.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (Position != 0) {
        output.WriteRawTag(8);
        output.WriteUInt32(Position);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (Position != 0) {
        output.WriteRawTag(8);
        output.WriteUInt32(Position);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Position != 0) {
        size += 1 + pb::CodedOutputStream.ComputeUInt32Size(Position);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(MovePayload other) {
      if (other == null) {
        return;
      }
      if (other.Position != 0) {
        Position = other.Position;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 8: {
            Position = input.ReadUInt32();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 8: {
            Position = input.ReadUInt32();
            break;
          }
        }
      }
    }
    #endif

  }

  public sealed partial class GameStatePayload : pb::IMessage<GameStatePayload>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<GameStatePayload> _parser = new pb::MessageParser<GameStatePayload>(() => new GameStatePayload());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<GameStatePayload> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::TicTacToe.Protobuf.TicTacToeSpecReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GameStatePayload() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GameStatePayload(GameStatePayload other) : this() {
      player_ = other.player_.Clone();
      map_ = other.map_.Clone();
      currentPlayer_ = other.currentPlayer_;
      winner_ = other.winner_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GameStatePayload Clone() {
      return new GameStatePayload(this);
    }

    /// <summary>Field number for the "player" field.</summary>
    public const int PlayerFieldNumber = 1;
    private static readonly pb::FieldCodec<string> _repeated_player_codec
        = pb::FieldCodec.ForString(10);
    private readonly pbc::RepeatedField<string> player_ = new pbc::RepeatedField<string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<string> Player {
      get { return player_; }
    }

    /// <summary>Field number for the "map" field.</summary>
    public const int MapFieldNumber = 2;
    private static readonly pb::FieldCodec<string> _repeated_map_codec
        = pb::FieldCodec.ForString(18);
    private readonly pbc::RepeatedField<string> map_ = new pbc::RepeatedField<string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<string> Map {
      get { return map_; }
    }

    /// <summary>Field number for the "current_player" field.</summary>
    public const int CurrentPlayerFieldNumber = 3;
    private uint currentPlayer_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public uint CurrentPlayer {
      get { return currentPlayer_; }
      set {
        currentPlayer_ = value;
      }
    }

    /// <summary>Field number for the "winner" field.</summary>
    public const int WinnerFieldNumber = 4;
    private string winner_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Winner {
      get { return winner_ ?? ""; }
      set {
        winner_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }
    /// <summary>Gets whether the "winner" field is set</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool HasWinner {
      get { return winner_ != null; }
    }
    /// <summary>Clears the value of the "winner" field</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void ClearWinner() {
      winner_ = null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as GameStatePayload);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(GameStatePayload other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if(!player_.Equals(other.player_)) return false;
      if(!map_.Equals(other.map_)) return false;
      if (CurrentPlayer != other.CurrentPlayer) return false;
      if (Winner != other.Winner) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= player_.GetHashCode();
      hash ^= map_.GetHashCode();
      if (CurrentPlayer != 0) hash ^= CurrentPlayer.GetHashCode();
      if (HasWinner) hash ^= Winner.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      player_.WriteTo(output, _repeated_player_codec);
      map_.WriteTo(output, _repeated_map_codec);
      if (CurrentPlayer != 0) {
        output.WriteRawTag(24);
        output.WriteUInt32(CurrentPlayer);
      }
      if (HasWinner) {
        output.WriteRawTag(34);
        output.WriteString(Winner);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      player_.WriteTo(ref output, _repeated_player_codec);
      map_.WriteTo(ref output, _repeated_map_codec);
      if (CurrentPlayer != 0) {
        output.WriteRawTag(24);
        output.WriteUInt32(CurrentPlayer);
      }
      if (HasWinner) {
        output.WriteRawTag(34);
        output.WriteString(Winner);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      size += player_.CalculateSize(_repeated_player_codec);
      size += map_.CalculateSize(_repeated_map_codec);
      if (CurrentPlayer != 0) {
        size += 1 + pb::CodedOutputStream.ComputeUInt32Size(CurrentPlayer);
      }
      if (HasWinner) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Winner);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(GameStatePayload other) {
      if (other == null) {
        return;
      }
      player_.Add(other.player_);
      map_.Add(other.map_);
      if (other.CurrentPlayer != 0) {
        CurrentPlayer = other.CurrentPlayer;
      }
      if (other.HasWinner) {
        Winner = other.Winner;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            player_.AddEntriesFrom(input, _repeated_player_codec);
            break;
          }
          case 18: {
            map_.AddEntriesFrom(input, _repeated_map_codec);
            break;
          }
          case 24: {
            CurrentPlayer = input.ReadUInt32();
            break;
          }
          case 34: {
            Winner = input.ReadString();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            player_.AddEntriesFrom(ref input, _repeated_player_codec);
            break;
          }
          case 18: {
            map_.AddEntriesFrom(ref input, _repeated_map_codec);
            break;
          }
          case 24: {
            CurrentPlayer = input.ReadUInt32();
            break;
          }
          case 34: {
            Winner = input.ReadString();
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code
